
		
<?php

class SpecsController {
	
	public function index_get() {
		echo " 
			<html>
			<head>
				<title>api specifications</title>
				<style>
					body {
						font-family: 'consolas';	
						color: #333;
					}
					.well {
						padding: 10px;
						background: #e5e5e5;
						border: #e5e5e5;
					}
					.api {
						border: 1px solid gainsboro;
						padding-left :5px;
						padding-right: 5px;
						margin-bottom: 10px;
					}
					.api span {
						font-weight: bold;
					}
					code,pre {
						font-family: Consolas, Monaco, Courier New, Courier, monospace;
						font-size: 12px;
						background-color: #f9f9f9;
						border: 1px solid #D0D0D0;
						color: #002166;
						display: block;
						margin: 14px 0 14px 0;
						padding: 12px 10px 12px 10px;
						padding-top: 0px;
					}
				</style>
			</head>
			<body>";

		foreach (scandir(CONTROLLERS) as $filename) {
			$path =  CONTROLLERS . '/' . $filename;
			if(is_file($path)) {
				$function = $this->parse_spec($path);
				echo '<h1 class=\'well\'>' , $function['class'], '</h1>';
				foreach ($function as $key => $value) {
					if($key != 'class') {
						$comment = str_replace(array('*', '/'), '', $value['comment']);
						echo "<div class='api'>";
						echo '<h2>/' , $function['class'] , '/', $value['function'], '</h2>';
						echo '<div>Method: ','<span>', $value['method'], '</span>';
						echo '<p><span>Details:</span></br>', str_replace("@", "</br>", $comment) , '</p>';
						echo '</div>';
						echo '</div>';
					}
				}
				//ob_flush();
			}
		}
		echo "</body></html>";
	    return 'Life is a lot easier with automation :)';
	}

	private function parse_spec($path) {
		$tokens = token_get_all(file_get_contents($path));
		$functions = array();
		$class_found = FALSE;
		$count = 0;
		$class = "";
		$replace_arr = array('_get', '_post', '_put', '_delete');

		foreach ($tokens as $key) {
			if($key[0] == T_CLASS) {
				$temp = 0;
				while ($class_found != TRUE) {
					if($tokens[$count + $temp][0] != T_WHITESPACE && $tokens[$count + $temp][0] != T_CLASS) {
						$class = str_replace("Controller", "", $tokens[$count + $temp][1]);
						$class_found = TRUE;
						$functions['class'] = strtolower($class);
					}
					$temp++;
				}
			}
			if($class_found && $key[0] == T_DOC_COMMENT) {
				// $functions['path'] = '/someclass/' . $key[1];
				
				$temp = 0;
				$function_found = false;
				$identifier_found = false;
				while ($function_found != TRUE) {
					if($tokens[$count + $temp][0] == T_FUNCTION) {
						$method_temp = 1;
						$method_found = false;
						while($method_found != TRUE) {
							if($tokens[$count + $temp + $method_temp][0] != T_WHITESPACE) {
								$method = str_replace($replace_arr, "", $tokens[$count + $temp + $method_temp][1]);
								$res = $this->is_my_method($tokens[$count + $temp + $method_temp][1]);
								if($res == true){
									$functions[$count]['comment'] = $key[1];
									$functions[$count]['function'] = $method;
									$functions[$count]['method'] = explode("_", $tokens[$count + $temp + $method_temp][1]);
									$functions[$count]['method'] = $functions[$count]['method'][1];
								}
								$method_found = TRUE;
								$function_found = TRUE;
							}
							$method_temp++;
						}
					}
					$temp++;
				}
			}
			$count++;
		}
		return $functions;
	}

	private function is_my_method($name) {
		$res = strpos($name, "_get", 0) != 0 || strpos($name, "_post", 0) != 0 || strpos($name, "_put", 0) != 0 || strpos($name, "_delete", 0) != 0;
		return $res;
	}
}
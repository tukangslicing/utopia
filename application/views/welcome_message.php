<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>Welcome to CodeIgniter</title>

	<style type="text/css">

	::selection{ background-color: #E13300; color: white; }
	::moz-selection{ background-color: #E13300; color: white; }
	::webkit-selection{ background-color: #E13300; color: white; }

	body {
		background-color: #fff;
		margin: 40px;
		font: 13px normal Helvetica, Arial, sans-serif;
		color: #4F5155;
	}

	a {
		color: #003399;
		background-color: transparent;
		font-weight: normal;
	}

	h1 {
		color: #444;
		background-color: transparent;
		border-bottom: 1px solid #D0D0D0;
		font-size: 19px;
		font-weight: normal;
		margin: 0 0 14px 0;
		padding: 14px 15px 10px 15px;
	}

	code {
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

	#body{
		margin: 0 15px 0 15px;
	}
	
	p.footer{
		text-align: right;
		font-size: 11px;
		border-top: 1px solid #D0D0D0;
		line-height: 32px;
		padding: 0 10px 0 10px;
		margin: 20px 0 0 0;
	}
	
	#container{
		margin: 10px;
		border: 1px solid #D0D0D0;
		-webkit-box-shadow: 0 0 8px #D0D0D0;
	}

	.api {
		border: 1px solid gainsboro;
		padding-left :5px;
		padding-right: 5px;
	}

	.api span {
		font-weight: bold;
	}
	</style>
</head>
<body>

	<div id="container">
		<h1>Welcome to Utopia!</h1>
		<div id="body">
			<p><b>Lets have an API guide here, parameters should include, URL, GET params, POST params, Return types</b></p>
			<!-- COPY PASTE THIS DIV EVERYTIME YOU WANNA ADD API DOCUMENTATION -->
			<div class='api'>
				<p><span>URL : </span><?php echo site_url(); ?>api/auth/</p>
				<p><span>POST params :</span> username, password</p>
				<p><span>Returns : </span></p>
				<code>
					<p>action_result : true / false</p>
					<p>data : user data if successful else blank array</p>
					<p>message : "Successfully logged in" / "Please check your email or password"</p> 
				</code>
			</div>

			<div class='api'>
				<p><span>URL : </span><?php echo site_url(); ?>api/projects_user/</p>
				<p><span>GET params :</span> NULL</p>
				<p><span>Returns : </span></p>
				<code>
					<p>action_result : true / false</p>
					<p>data : If User is Logged In then - user data ; else blank array</p>
					<p>message : "Success" / "Login Failed"</p> 
				</code>
			</div>
			
			<div class='api'>
				<p><span>URL : </span><?php echo site_url(); ?>api/projects/id/[:project_id]</p>
				<p><span>GET params :</span> Project ID</p>
				<p><span>Returns : </span></p>
				<code>
					<p>action_result : true / false</p>
					<p>data : Project Details / NULL</p>
					<p>message : "Success" / "Not Found"</p> 
				</code>
			</div>

			<div class='api'>
				<p><span>URL : </span><?php echo site_url(); ?>api/projects/</p>
				<p><span>POST params :</span> title, description, sprint_duration, need_review, created_by</p>
				<p><span>Returns : </span></p>
				<code>
					<p>action_result : true / false</p>
					<p>data :  NULL</p>
					<p>message : "Insert Success 201" / "Failed To Insert 400"</p> 
				</code>
			</div>

			<div class='api'>
				<p><span>URL : </span><?php echo site_url(); ?>api/projects/</p>
				<p><span>PUT params :</span>  id , title, description, sprint_duration, need_review, calculate_velocity_on, created_by</p>
				<p><span>Returns : </span></p>
				<code>
					<p>action_result : true / false</p>
					<p>data :  NULL</p>
					<p>message : "Update Success 201" / "Failed To Update 400"</p> 
				</code>
			</div>

			<div class='api'>
				<p><span>URL : </span><?php echo site_url(); ?>api/projects/id/[:project_id]</p>
				<p><span>DELETE params :</span> Project ID</p>
				<p><span>Returns : </span></p>
				<code>
					<p>action_result : true / false</p>
					<p>data :  NULL</p>
					<p>message : "Delete Success 201" / "Unable To Delete 400"</p> 
				</code>
			</div>

			

		</div>
		<p class="footer">Page rendered in <strong>{elapsed_time}</strong> seconds</p>
	</div>

</body>
</html>
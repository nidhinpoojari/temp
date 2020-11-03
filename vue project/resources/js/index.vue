
<template>

<div class="no-js">
<body class="login" >

	<div class="welcome-text"><img alt="MCC" src="../assets/img/welcome.png"></div>

	<div class="lock-wrapper">


	<div id="time" >
        {{timestamp}}
    </div>


        <div class="lock-box text-center">
            <form action="dashboard.html" class="form-inline" role="form">
            <!-- <div class="lock-name">Smitha Rai</div> -->
			<div class="clearfix">
			<div class="lock-usr">
				<div class="form-group">
						<input type="text" class="form-control lock-input" id="exampleInputUsername" placeholder="Username">
				</div>
			</div>
            <img alt="lock avatar" src="../assets/img/avatar01.jpg">
            <div class="lock-pwd">
				<div class="form-group">
					<input type="password" class="form-control lock-input" id="exampleInputPassword2" placeholder="Password">
					<button type="submit" class="btn btn-lock">
						<i class="fa fa-arrow-right"></i>
					</button>
				</div>
            </div>
			</div>

			<div class="alert alert-danger alert-dismissible" role="alert">
			  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			  <strong>Error!</strong> Usrename doesnt match.
			</div>

            </form>

        </div>
    </div>

    <!-- BEGIN FOOTER -->
    <div class="page-footer">
        <div class="page-footer-inner">
            &copy; Copyright Ujire Grama Panchayath. All Rights Reserved.
        </div>
    </div>

</body>
</div>


</template>

<script>

export default
{


    data() {
        return  {timestamp:""}
            },

        mounted()
        {
        // this.startTime()
        setInterval(this.getNow, 1000);

        },
            methods:
     {

          checkTime(i)
        {
            if (i<10)
            {
                i="0" + i;
            }
            return i;
        },
                getNow: function() {
                    const today = new Date();
                    // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    const hh=this.checkTime(today.getHours());
                    const mm = this.checkTime( today.getMinutes());
                    const ss=this.checkTime(today.getSeconds());


                    const dateTime = hh+ ":" +mm + ":" + ss;
                    this.timestamp = dateTime;
                }
      }




}
</script>
<style lang="css" >
@import url('http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all');
@import url('http://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic');

@import url('/assets/css/components.css');
@import url('/assets/css/style.css');
@import url('/assets/css/themes/default.css');
@import url('/assets/plugins/bootstrap/css/bootstrap.min.css');
@import url('/assets/plugins/font-awesome/css/font-awesome.min.css');





</style>











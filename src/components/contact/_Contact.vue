
<template>
<div class="Contact">

	<h1>[Contact Me]</h1>

	<div class="ct-form">

		<!-- Spinner -->
		<Transition name="fade-in">
			<div v-show="spinnerEnabled" class="inactive-blocker">
				<div class="spinner"/>
			</div>
		</Transition>

		<form ref="form" @submit.prevent="sendEmail">
			<label>Name</label>
			<input type="text" name="user_name" placeholder="Your Name" required>
			<label>Email</label>
			<input type="email" name="user_email"  placeholder="Your Email" required>
			<label>Message</label>
			<textarea name="message"  placeholder="Message" required/>
			<input class="ct-submit" type="submit" value="Send">
		</form>
	</div>

</div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
	data: ()=>({
       spinnerEnabled: false
    }),
  	methods: {
		sendEmail(){
			this.spinnerEnabled = true;
			emailjs.sendForm('service_3nfg1cg', 'template_wwwpk9y', this.$refs.form, 'XaE1Tm4qNpspiVMOp')
				.then((result) => {
					console.log('SUCCESS!', result.text);
					this.$refs.form.reset();
					this.spinnerEnabled = false;
				}, (error) => {
					console.log('FAILED...', error.text);
					this.spinnerEnabled = false;
				});
		}
	}
}
</script>

<style scoped>
.Contact{
	margin-top: 200px;
	margin-bottom: 100px;
}
h1{
	margin-bottom: 50px;
}
.ct-form{
	margin-left: 21%;
    margin-right: 21%;
    width: 50%;
	padding: 3% 4%;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.123);
	border-radius: 3px;
	position: relative;
}
label, textarea, input{
	display: block;
	width: 100%;
}
textarea, input{
	margin-bottom: 20px;
	padding: 5px 10px;
	font-size: 20px;
	background: rgb(243, 243, 243);
	border: none;
	font-family: inherit;
	border-radius: 3px;
	width: calc(100% - 20px);
}
textarea{
	height: 300px;
	resize: none;
}
label{
	font-size: 24px;
}
input{
	height: 30px;
}
.ct-submit{
	width: 25%;
	background: #6366F1;
	color: white;
	border: none;
	border-radius: 2px;
	padding: 20px 20px;
	text-align: center;
	line-height: 0px;
	cursor: pointer;
	transition: .3s background ease;
}
.ct-submit:hover{
	background: #3739a0;
}

/* Spinner */
.inactive-blocker{
  position: absolute;
  z-index:1;
  top:0;
  left:0;
  height:100%;
  width:100%;
  background-color:rgba(0,0,0,0.4);
  cursor: no-drop;
}
.spinner{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 50%;
  background-color: #6366F1;
}
.spinner *{
  pointer-events: none;
}
.spinner::before{
	content:'';
	position:absolute;
	top:50%;
	left:50%;
	height:100%;
	width: 100%;
	max-height: 96px; 
	max-width: 96px;
	border-radius: 50%;
	border: 2px solid #6366F1;
	border-top: 2px solid #3739c2;
	background-color: none;
	animation: spin 2s linear infinite;
}
@keyframes spin{
  0%  {transform: translate(-50%,-50%) rotate(0deg)}
  100%{transform: translate(-50%,-50%) rotate(360deg)}
}
.spinner:hover{
  background-color: #6366F1;
}

/* Spinner Transition */
.fade-in-enter-active, .fade-in-leave-active {
  transition: opacity 0.5s ease;
}
.fade-in-enter-from, .fade-in-leave-to {
  opacity: 0;
}

/* Mobile */
@media (max-device-width: 900px){
	.Contact{
		margin-top: 100px;
		margin-bottom: 20px;
	}
   .ct-form{
		margin-left: 6%;
		margin-right: 6%;
		width: 80%;
	}
	h1{
		margin-bottom: 20px;
	}
}

</style>
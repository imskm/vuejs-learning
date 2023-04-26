<template>
	<a href="/page-2">Page 2</a>
	
	<!-- <router-link to="/page-2">Page 2</router-link> -->
	<router-link :to="{name: 'page-2'}">Page 2</router-link>

	<h1>HOME PAGE UPDATED - {{ fullName }}</h1>
	<input v-model="ifsc" type="text" name="ifsc"> <button @click="fetchBankDetails">Fetch</button>

	<div>
		{{ result }}
	</div>
</template>

<script>
export default {
	data() {
		return {
			ifcs: "",
			result: {},
		}
	},

	methods: {
		fetchBankDetails() {
			// https://ifsc.razorpay.com/<IFSC_CODE>
			// Example: https://ifsc.razorpay.com/ABHY0065001
			// console.log(this.ifsc);

			// const url = `https://ifsc.razorpay.com/${this.ifsc}`;
			const url = "https://ifsc.razorpay.com/" + this.ifsc;
			fetch(url).then((res) => {
				if (!res.ok) {
					throw Error("Invalid IFSC code");
				}
				return res.json();
			}).then((res) => {
				this.result = res;
			}).catch((err) => {
				console.error(err);
			})
		}
	}
}
</script>
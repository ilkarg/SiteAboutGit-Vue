<template>
	<div id="links">
		<div class="container links">
			<div class="row py-5">
				<div class="col">&nbsp;</div>
			</div>
			<div class="row">
				<div class="col py-2">
					<a class="links__link" href="javascript:window.open('https://www.git-scm.com')">Git</a>
				</div>
			</div>
			<div class="row">
				<div class="col py-2">
					<a class="links__link" href="javascript:window.open('https://www.github.com')">GitHub</a>
				</div>
			</div>
			<div class="row">
				<div class="col py-2">
					<a class="links__link" href="javascript:window.open('https://www.gitlab.com')">GitLab</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style>
	.links__link {
		text-decoration: none;
		color: #2c3e50;
		font-size: 18px;
		font-weight: bold;
		transition: 0.2s;
	}

	.links__link:hover {
		color: #42b983;
	}
</style>

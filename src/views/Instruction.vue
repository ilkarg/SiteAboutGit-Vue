<template>
  <div class="about">
    	<div class="container">
    		<div class="row">
			<div class="col-3 col-lg-5"></div>
			<div class="col-2 col-lg-2">
				<p class="instructions-headers">Настройка</p>
			</div>
			<div class="col-lg-12">
				<p style="background-color: lightgray">git config --global user.name "&lt;ваше_имя&gt;"<br>git config --global user.email "&lt;адрес_почты@gmail.com&gt;"</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4"></div>
			<div class="col-lg-4">
				<p class="instructions-headers">Создание репозитория</p>
			</div>
			<div class="col-lg-12">
				<p style="background-color: lightgray">cd &lt;путь_к_вашему_проекту&gt;<br>git init</p>
			</div>
		</div>
		<div class="row">
			<div class="col-2 col-lg-3"></div>
			<div class="col-12 col-lg-6">
				<p class="instructions-headers">Добавление файлов в репозиторий</p>
			</div>
			<div class="col-lg-12">
				<p style="background-color: lightgray">git add .<br>git add --all<br>git add &lt;имя_файла&gt;</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4"></div>
			<div class="col-12 col-lg-5">
				<p class="instructions-headers">Коммит файлов в репозиторий</p>
			</div>
			<div class="col-lg-12">
				<p style="background-color: lightgray">git commit -m "&lt;комментарий&gt;"</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-3"></div>
			<div class="col-lg-7">
				<p class="instructions-headers">Добавление ссылки на репозиторий(для GitHub)</p>
			</div>
			<div class="col-lg-12">
				<p style="background-color: lightgray">git remote add origin "&lt;ссылка_на_репозиторий&gt;"</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-3"></div>
			<div class="col-lg-7">
				<p class="instructions-headers">Пуш в репозиторий в ветку master(для GitHub)</p>
			</div>
			<div class="col-lg-12">
				<p style="background-color: lightgray">git push -u origin master</p>
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
	.instructions-headers {
		font-size: 25px;
		font-weight: bold;
	}
</style>

<script>
  import { fetchData } from "$lib/api/fetch";
	import { updateUser } from '$lib/stores/user';
	import { goto } from '$app/navigation';

	let userId = "test";
	let password = "bb";

	async function handleLogin() {
		// 로그인 처리 로직 작성
		// 예: 서버 요청, 인증 등
		const data = { userId, password };
		fetchData("/api/authenticate", data)
			.then((data) => {
				//console.log("Response:", data);

				// 배열 데이터를 문자열로 변환하여 localStorage에 저장
				var authorities = JSON.stringify(data.userDetails.authorities);

				var arr = {
					userId: data.userDetails.username,
					authorities: authorities,
					accessToken: data.accessToken,
					refreshToken: data.refreshToken,
					isLoggedIn: true,
					enabled: data.userDetails.enabled
				};

				// 사용자 정보를 업데이트합니다.
				updateUser(arr);
				localStorage.setItem('user', JSON.stringify(arr));
				
				// 로그인 성공 시 페이지 이동
				goto('/admin/main', { replaceState: true });
			})
			.catch((error) => {
				//console.error('Fetch Error:', error);
				// 에러 처리 로직 작성
				if (error.code === 20) {
					alert(error.message);
				}
			});
	}

</script>

<main>
	<div class="login-container">
		<h1>Login</h1>
		<form on:submit|preventDefault={handleLogin}>
			<div class="form-group">
				<label for="userId">Id:</label>
				<input type="userId" id="userId" bind:value={userId} required />
			</div>
			<div class="form-group">
				<label for="password">Password:</label>
				<input
					type="password"
					id="password"
					bind:value={password}
					required
				/>
			</div>
			<button type="submit">Log in</button>
		</form>
	</div>
</main>

<style lang="scss">
	.login-container {
		max-width: 400px;
		margin: 0 auto;
		padding: 20px;
		border-radius: 5px;
		h1 {
			background-color: rgba(#000, 0.5); /* scss에서만 실행가능한 코드 */
			text-align: center;
			margin-bottom: 20px;
		}
	}

	.form-group {
		margin-bottom: 10px;
	}

	label {
		display: block;
		margin-bottom: 5px;
		font-weight: bold;
	}

	input {
		width: 100%;
		padding: 8px;
		border-radius: 3px;
		border: 1px solid #ccc;
	}

	button {
		display: block;
		width: 100%;
		padding: 10px;
		background-color: #007bff;
		color: #fff;
		border: none;
		border-radius: 3px;
		cursor: pointer;
	}
</style>

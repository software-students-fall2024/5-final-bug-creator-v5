// 处理登录表单提交
async function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await api.auth.login(email, password);
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        window.location.href = '/index.html';
    } catch (error) {
        showError(error.message);
    }
}

// 处理注册表单提交
async function handleRegister(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await api.auth.register(username, email, password);
        window.location.href = '/pages/login.html';
    } catch (error) {
        showError(error.message);
    }
}

// 检查用户是否已登录
function checkAuth() {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = './pages/login.html';
    }
}

// 退出登录
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = './pages/login.html';
}

// 显示错误信息
function showError(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
} 
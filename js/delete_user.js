const API = {
    BASE_URL: 'https://backend.goalpe.live/api/v1',

    async deleteAccount({ email, otp }) {
        // TODO: replace with real endpoints when available
        await new Promise((resolve) => setTimeout(resolve, 1500));
        return { success: true };
    },
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const form = document.getElementById('delete-form');
const emailInput = document.getElementById('email');
const otpInput = document.getElementById('otp');
const emailError = document.getElementById('email-error');
const otpError = document.getElementById('otp-error');
const submitBtn = document.getElementById('submit-btn');
const statusMessage = document.getElementById('status-message');

function clearFieldError(input, errorEl) {
    input.classList.remove('input--error');
    errorEl.textContent = '';
}

function setFieldError(input, errorEl, message) {
    input.classList.add('input--error');
    errorEl.textContent = message;
}

function clearStatus() {
    statusMessage.textContent = '';
    statusMessage.className = 'status-message';
}

function setStatus(message, type) {
    statusMessage.textContent = message;
    statusMessage.className = `status-message status-message--${type}`;
}

function validateEmail(value) {
    const trimmed = value.trim();
    if (!trimmed) return 'Email is required';
    if (!EMAIL_REGEX.test(trimmed)) return 'Please enter a valid email address';
    return '';
}

function validateOtp(value) {
    const trimmed = value.trim();
    if (!trimmed) return 'OTP is required';
    if (!/^\d{6}$/.test(trimmed)) return 'OTP must be 6 digits';
    return '';
}

function setLoading(isLoading) {
    submitBtn.disabled = isLoading;
    submitBtn.classList.toggle('submit-btn--loading', isLoading);
}

otpInput.addEventListener('input', () => {
    otpInput.value = otpInput.value.replace(/\D/g, '').slice(0, 6);
    clearFieldError(otpInput, otpError);
    clearStatus();
});

emailInput.addEventListener('input', () => {
    clearFieldError(emailInput, emailError);
    clearStatus();
});

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    clearStatus();

    const emailErr = validateEmail(emailInput.value);
    const otpErr = validateOtp(otpInput.value);

    clearFieldError(emailInput, emailError);
    clearFieldError(otpInput, otpError);

    if (emailErr) setFieldError(emailInput, emailError, emailErr);
    if (otpErr) setFieldError(otpInput, otpError, otpErr);
    if (emailErr || otpErr) return;

    setLoading(true);

    try {
        const result = await API.deleteAccount({
            email: emailInput.value.trim(),
            otp: otpInput.value.trim(),
        });

        if (result.success) {
            setStatus('Account deleted successfully.', 'success');
            form.reset();
        } else {
            setStatus(result.message || 'Failed to delete account. Please try again.', 'error');
        }
    } catch {
        setStatus('Failed to delete account. Please try again.', 'error');
    } finally {
        setLoading(false);
    }
});

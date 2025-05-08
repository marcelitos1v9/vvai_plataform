import emailjs from '@emailjs/browser';

export const sendEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
    );

    return { success: true, data: response };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false, error };
  }
}; 
// Basic email service without external dependencies
// For production, replace with Resend or SendGrid

interface EmailOptions {
  to: string
  subject: string
  html: string
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  // In development, just log the email
  if (process.env.NODE_ENV === 'development') {
    console.log('📧 Email would be sent:')
    console.log('To:', to)
    console.log('Subject:', subject)
    console.log('HTML:', html)
    return { success: true, messageId: 'dev-' + Date.now() }
  }

  // For production, you would integrate with Resend or SendGrid here
  // Example with Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // return await resend.emails.send({ from: 'noreply@sdfm2520.com', to, subject, html })
  
  console.warn('Email service not configured for production')
  return { success: false, error: 'Email service not configured' }
}

export function generateOrderConfirmationEmail(orderNumber: string, customerName: string, totalAmount: number, items: any[]) {
  return `
    <\!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Order Confirmation - SDFM 2520</title>
      <style>
        body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #000; color: #fff; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .order-details { background: #fff; padding: 15px; margin: 20px 0; border-radius: 5px; }
        .item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
        .total { font-size: 18px; font-weight: bold; margin-top: 20px; }
        .footer { text-align: center; padding: 20px; color: #666; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>SDFM 2520</h1>
        <h2>Order Confirmation</h2>
      </div>
      
      <div class="content">
        <p>Hi ${customerName},</p>
        <p>Thank you for your order\! Your payment has been processed and your order is being prepared for shipment.</p>
        
        <div class="order-details">
          <h3>Order Details</h3>
          <p><strong>Order Number:</strong> ${orderNumber}</p>
          <p><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
          
          <h4>Items Ordered:</h4>
          ${items.map(item => `
            <div class="item">
              <span>${item.productName} x${item.quantity}</span>
              <span>$${item.totalPrice.toFixed(2)}</span>
            </div>
          `).join('')}
          
          <div class="total">
            Total: $${totalAmount.toFixed(2)}
          </div>
        </div>
        
        <p>You will receive a shipping confirmation email with tracking information once your order ships.</p>
        <p>If you have any questions, please contact us at support@sdfm2520.com</p>
      </div>
      
      <div class="footer">
        <p>SDFM 2520 Streetwear</p>
        <p>Thank you for your business\!</p>
      </div>
    </body>
    </html>
  `
}
EOF < /dev/null

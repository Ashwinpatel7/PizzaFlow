# PizzaFlow 🍕

A modern, intuitive pizza order management platform built with Next.js, TypeScript, Tailwind CSS, and NextAuth.js for Google OAuth authentication. Streamline your pizza business with PizzaFlow's elegant interface and powerful features.

**Developer**: Ashwin Patel
**Location**: India 🇮🇳

## 🚀 Features

- **Google OAuth Authentication**: Secure login using Google accounts
- **Protected Routes**: Dashboard pages are only accessible to authenticated users
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Pizza Orders Management**: View, sort, and filter pizza orders
- **Real-time Search**: Search orders by customer name, order ID, or pizza type
- **Status Filtering**: Filter orders by status (Pending, Preparing, Out for Delivery, Delivered, Cancelled)
- **Sortable Columns**: Click column headers to sort by any field
- **Modern UI**: Clean, professional interface with Tailwind CSS
- **Loading States**: Proper loading indicators for better UX
- **Error Handling**: Graceful error handling throughout the application

## 🛠️ Technology Stack

- **Framework**: Next.js 15.1.8 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js with Google OAuth
- **Icons**: Lucide React
- **Deployment**: Vercel/Railway ready

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- A Google Cloud Console account for OAuth setup
- Git for version control

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd pizza-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables Setup

Create a `.env.local` file in the root directory and add the following variables:

```env
# NextAuth.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 4. Google OAuth Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create a new OAuth 2.0 Client ID
5. Set the authorized redirect URI to: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Client Secret to your `.env.local` file

### 5. Generate NextAuth Secret

Generate a secure secret for NextAuth:

```bash
openssl rand -base64 32
```

Add this to your `NEXTAUTH_SECRET` in `.env.local`.

## 🚀 Running the Application

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📱 Application Structure

```
src/
├── app/
│   ├── api/auth/[...nextauth]/     # NextAuth API routes
│   ├── auth/signin/                # Sign-in page
│   ├── components/                 # Reusable components
│   ├── dashboard/                  # Protected dashboard pages
│   │   ├── orders/                 # Pizza orders page
│   │   └── layout.tsx              # Dashboard layout
│   ├── globals.css                 # Global styles
│   ├── layout.tsx                  # Root layout
│   └── page.tsx                    # Home page (redirects to sign-in)
├── lib/
│   ├── auth.ts                     # NextAuth configuration
│   └── mockData.ts                 # Mock pizza order data
└── middleware.ts                   # Route protection middleware
```

## 🎯 Usage

### Authentication Flow

1. Visit the application at `http://localhost:3000`
2. You'll be redirected to the sign-in page
3. Click "Continue with Google" to authenticate
4. After successful authentication, you'll be redirected to the dashboard

### Dashboard Features

#### Welcome Page (`/dashboard`)
- Personalized greeting with user's name
- Quick statistics overview
- Quick action buttons to navigate to different sections

#### Pizza Orders Page (`/dashboard/orders`)
- View all pizza orders in a responsive table
- **Search**: Use the search bar to find orders by customer name, order ID, or pizza type
- **Filter**: Filter orders by status using the dropdown
- **Sort**: Click any column header to sort by that field
- **Status Badges**: Visual indicators for different order statuses

### Order Status Types

- **Pending**: 🟡 Order received, waiting to be prepared
- **Preparing**: 🔵 Order is being prepared in the kitchen
- **Out for Delivery**: 🟣 Order is on its way to the customer
- **Delivered**: 🟢 Order has been successfully delivered
- **Cancelled**: 🔴 Order has been cancelled

## 🚀 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Update `NEXTAUTH_URL` to your production URL
5. Update Google OAuth redirect URI to include your production domain

### Railway Deployment

1. Connect your repository to Railway
2. Add environment variables in Railway dashboard
3. Update `NEXTAUTH_URL` to your production URL
4. Update Google OAuth redirect URI to include your production domain

## 🧪 Testing

The application includes comprehensive error handling and loading states. To test:

1. **Authentication**: Try signing in/out multiple times
2. **Protected Routes**: Try accessing `/dashboard` without authentication
3. **Search & Filter**: Test the search and filter functionality
4. **Responsive Design**: Test on different screen sizes
5. **Sorting**: Test sorting by different columns

## 🔒 Security Features

- **Protected Routes**: Middleware ensures only authenticated users can access dashboard
- **Secure Authentication**: Uses NextAuth.js with Google OAuth
- **Environment Variables**: Sensitive data stored in environment variables
- **CSRF Protection**: Built-in CSRF protection with NextAuth.js

## 🎨 UI/UX Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Loading States**: Smooth loading indicators
- **Error Handling**: User-friendly error messages
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Modern Design**: Clean, professional interface

## 📦 Dependencies

### Main Dependencies
- `next`: React framework
- `react` & `react-dom`: React library
- `next-auth`: Authentication library
- `lucide-react`: Icon library

### Development Dependencies
- `typescript`: Type safety
- `tailwindcss`: Utility-first CSS framework
- `eslint`: Code linting
- `@types/*`: TypeScript type definitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **Google OAuth Error**: Make sure your redirect URI is correctly set in Google Cloud Console
2. **Environment Variables**: Ensure all required environment variables are set
3. **Build Errors**: Clear `.next` folder and rebuild: `rm -rf .next && npm run build`
4. **Authentication Issues**: Check that `NEXTAUTH_SECRET` is properly set

### Support

If you encounter any issues, please check the following:
- Ensure all environment variables are correctly set
- Verify Google OAuth configuration
- Check browser console for any JavaScript errors
- Ensure you're using Node.js 18+

## 🎯 Future Enhancements

- Real database integration
- Order management (create, update, delete)
- Real-time notifications
- Advanced analytics dashboard
- Multi-role user management
- Order tracking with maps integration

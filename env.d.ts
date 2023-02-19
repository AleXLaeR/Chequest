declare global {
  namespace NodeJS {
    interface ProcessEnv extends NextAuthEnv, APIEnv {
      MONGODB_URI: string;
      NODE_ENV: 'development' | 'production';
    }
  }

  interface NextAuthEnv extends GoogleCredsEnv, LinkedInCredsEnv, GitHubCredsEnv, Auth0Creds {
    NEXTAUTH_SECRET: string;
    NEXTAUTH_URL: string;
  }

  interface APIEnv extends IpRegistryEnv, MailChimpEnv {
    BASE_API_URL: string;
  }
}

interface GoogleCredsEnv {
  GOOGLE_ID: string;
  GOOGLE_SECRET: string;
}

interface LinkedInCredsEnv {
  LINKEDIN_ID: string;
  LINKEDIN_SECRET: string;
}

interface GitHubCredsEnv {
  GITHUB_ID: string;
  GITHUB_SECRET: string;
}

interface Auth0Creds {
  AUTH0_ISSUER: string;
  AUTH0_CLIENT_SECRET: string;
  AUTH0_CLIENT_ID: string;
}

interface IpRegistryEnv {
  IP_REGISTRY_API_KEY: string;
}

interface MailChimpEnv {
  MAILCHIMP_AUDIENCE_ID: string;
  MAILCHIMP_API_KEY: string;
}

export {};

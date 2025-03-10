// Define an object with your environment variables
const envVars = {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_API_URL,
    // API_KEY: process.env.NEXT_PUBLIC_API_KEY,
};

// Function to validate environment variables
const checkEnvVars = (vars: Record<string, string | undefined>) => {
    console.log({Bro: process.env.NEXT_PUBLIC_BASE_API_URL})
    Object.entries(vars).forEach(([key, value]) => {
        if (!value) {
            throw new Error(`${key} is not defined`);
        }
    });
};

// Run the check
checkEnvVars(envVars);

// Export the validated variables
export const { BASE_URL } = envVars;

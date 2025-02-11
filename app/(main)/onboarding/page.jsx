import { getUserOnboardingStatus } from '@/actions/user';
import { industries } from '@/data/industries';
import { redirect } from 'next/navigation';
import onboardingForm from './_components/onboarding-form';

const OnboardingPage = async () => {
    //check if user is already Onboarded
    const { isOnboarded } = await getUserOnboardingStatus();

    if (isOnboarded) {
        redirect('/dashboard');
    }

    return (
        <main>
            {/* <onboardingForm industries={industries} /> */}
        </main>
    );
};

export default OnboardingPage;

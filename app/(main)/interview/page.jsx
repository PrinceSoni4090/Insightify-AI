import { getAssessments } from "@/actions/interview";
import StatsCards from "./_components/stats-card";
import QuizList from "./_components/quiz-list";
import PerformanceChart from "./_components/performance-chart";

const InterviewPage = async () => {

    const assessments = await getAssessments();
    return (
        <div>
            <div>
                <h1 className="text-6xl font-bold gradient-title mb-5"> Interview Prep</h1>
                <div>
                    <StatsCards assessments={assessments} />
                    <PerformanceChart assessments={assessments} />
                    <QuizList assessments={assessments} />
                </div>
            </div>
        </div>
    );
};

export default InterviewPage;

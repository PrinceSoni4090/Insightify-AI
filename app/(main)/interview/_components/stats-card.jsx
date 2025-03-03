import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain } from "lucide-react";
import { Trophy } from "lucide-react";


const StatsCards = ({ assessments }) => {

    const getAveragescore = () => {
        if (!assessments?.length) return 0;
        const total = assessments.reduce(
            (sum, assessments) => sum + assessments.quizScore,
            0
        );
        return (total / assessments.length).toFixed(1);
    };

    const getLatestAssessment = () => {
        if (!assessments?.length) return null;
        return assessments[0];
    };

    const getTotalQuestions = () => {
        if (!assessments?.length) return 0;
        return assessments.reduce(
            (sum, assessments) => sum + assessments.questions.length,
            0
        );
    };
    return (
        <div className='grid gap-4 md:grid-cols-3'>
            <Card>
                <CardHeader className="flex flex-row space-y-0 pb-2 justify-between">
                    <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{getAveragescore()}%</div>
                    <p className="text-xs text-muted-foreground">
                        Across all assessments
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row space-y-0 pb-2 justify-between">
                    <CardTitle className="text-sm font-medium">Questions Practiced</CardTitle>
                    <Brain className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{getTotalQuestions()}</div>
                    <p className="text-xs text-muted-foreground">
                        Total Questions
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row space-y-0 pb-2 justify-between">
                    <CardTitle className="text-sm font-medium">Latest Score</CardTitle>
                    <Trophy className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                        {getLatestAssessment()?.quizScore.toFixed(1) || 0}%
                    </div>
                    <p className="text-xs text-muted-foreground">
                        Most recent quiz
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default StatsCards;

import Button from "@/components/buttons/button.component";

export default function DashboardRecentActivity() {
    return (
        <>
        <div>
            <dl>
                <time className="font-medium">Wed 2/1 8:12pm</time>
                <dt>Fix UI Glitches -</dt>
                <dd className="italic font-extralight">
                    <span className="activity-name not-italic">Aya said:</span>
                    <q>I think I fixed the bug. It was a simple fix. Just need someone to test it for me.</q>
                </dd>
            </dl>
            <dl className="pt-3">
                <time className="font-medium">Mon 1/30 12:32pm</time>
                <dt>Code Review -</dt>
                <dd className="italic font-extralight">
                    <span className="activity-name not-italic">Serena said:</span>
                    <q>I changed the due date for the UI Glitches</q>
                </dd>
            </dl>
            <dl className="pt-3">
                <time className="font-medium">Mon 1/30 12:28pm</time>
                <dt>Code Review -</dt>
                <dd className="font-extralight">
                    <p>Due date updated</p>
                </dd>
            </dl>
        </div>
        <div className="float-right">
            <Button>See More</Button>
        </div>
        </>
    )
}
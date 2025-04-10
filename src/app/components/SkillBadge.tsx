export default function SkillBadge({ skill }: { skill: string }) {
    return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            {skill}
        </span>
    )
}
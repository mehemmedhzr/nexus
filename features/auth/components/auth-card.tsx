export function AuthCard({children, title, description}: {children: React.ReactNode, title: string, description: string}) {
    return (
        <div>
            <h2>{title}</h2>
            <h5>{description}</h5>

            {children}
        </div>
    )
}
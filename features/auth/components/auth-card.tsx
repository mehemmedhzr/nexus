export function AuthCard({children, title, description}: {children: React.ReactNode, title: string, description: string}) {
    return (
        <div className="shadow-md py-4 px-6 rounded-4xl min-w-md">
            <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
            <h5 className="text-xl text-center mb-6">{description}</h5>

            {children}
        </div>
    )
}
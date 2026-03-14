import { Code2,Lightbulb,Rocket,Users} from "lucide-react";
const highlights = [
    {
        icon: Code2,
        title:"Clean Code",
        description:"More like Iron Man-build,test,break,understand and deliver everything.",

    },
    {
        icon:Users,
        title:"Performance",
        description:"Working closely with teams to bring thoughts into screens.",
    },
    {
        icon:Lightbulb,
        title:"Innovation",
        description:"Staying ahead with lastest techs and practices."
    },
];

export const About = () => {
    return <section id="about" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">{/*Left*/}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">Building Innovation,
                  <span className="font-serif italic font-normal text-white">  one solution at a Time. </span>
                </h2>
                <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                    <p>
                    I am a Computer Science graduate student at Syracuse University with a strong
                    interest in software engineering, full-stack development, AI-powered
                    applications, and scalable system design. I enjoy building impactful
                    digital solutions that combine clean user experiences with efficient
                    backend architecture.
                    </p>
                    <p>
                    My experience includes developing web applications, APIs, cloud-based
                    solutions, and real-world software projects using technologies like
                    React, Node.js, Java, Python, TypeScript, AWS, and SQL. I am passionate
                    about solving problems, learning new technologies, and turning ideas into
                    practical and meaningful products.
                    </p>
                    <p>
                     When I'm not coding you'll find me exploring new technologies,
                     contributing to open-source projects.
                    </p>
                </div>
                <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                    <p className="text-lg font-medium italic text-foreground">
                    My mission is to combine software engineering and AI to build intelligent, scalable, and practical solutions that make technology more useful and accessible.
                    </p>
                </div>
            </div>
            {/*Right-Highlights*/}
            <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item,idx)=> (
                    <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay:`${(idx+1)*100}ms`}}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20"><item.icon className="w-6 h-6 text-primary"/></div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>

                ))}
            </div>

            </div>
        </div>
    </section>;
}
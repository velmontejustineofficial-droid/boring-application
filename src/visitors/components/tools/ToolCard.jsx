import { Globe, Code2, BookOpen, ExternalLink, Eye, UserRound, CalendarDays, Layers3,} from 'lucide-react';
import "./css/ToolCard.css";

function CardHeader({category, type}){
    return(
        <div className="community-tool-card-top">
            <div className="community-tool-icon">
                {category === 'Libraries' ? (
                    <BookOpen size={23} />
                ) : category === 'Desktop Tools' ? (
                    <Layers3 size={23} />
                ) : category === 'Developer Tools' ? (
                    <Code2 size={23} />
                ) : (
                    <Globe size={23} />
                )}
            </div>
            <span className="community-tool-type">
                {type}
            </span>
        </div>
    )
}

function CardContent({category, name, description, technologies}){
    return(
        <div className="community-tool-content">
            <span className="community-tool-category">
                {category}
            </span>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="community-tool-tags">
                {(Array.isArray(technologies)
                    ? technologies
                    : []
                ).map((technology) => (
                    <span key={technology}>
                        {technology}
                    </span>
                ))}
            </div>
        </div>
    )
}

function CardAuthor({author, date}){
    return(                   
        <div className="community-tool-author">
            <div className="community-tool-avatar">
                <UserRound size={16} />
            </div>

            <div className="community-tool-author-info">
                <span>Created by</span>
                <strong>{author}</strong>
            </div>

            <div className="community-tool-date">
                <CalendarDays size={13} />
                <span>{date}</span>
            </div>
        </div>
    )
}

function CardAction({ demo, name, github}){
    return(
        <div className="community-tool-actions">
            <button type="button" className="tool-details-button" onClick={() => alert("test")}>
                <Eye size={16} />
                Details
            </button>
            {demo && (
                <a 
                    className="tool-demo-button"
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${name} demo`}
                >
                    <ExternalLink size={16} />
                </a>
            )}
            {github && (
                <a
                    className="tool-github-button"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${name} source code`}
                >
                    <Code2 size={17} />
                </a>
            )}
        </div>
    )
}

export default function ToolCard({category, type, name, description, technologies, author, date, demo, github}){
    return(
        <article className="community-tool-card">
            <CardHeader
                category={category}
                type={type}
            />
            <CardContent
                category={category}
                name={name}
                description={description}
                technologies={technologies}
            />
            <CardAuthor
                author={author}
                date={date}
            />
            <CardAction
                demo={demo}
                name={name}
                github={github}
            />
        </article>
    )
}
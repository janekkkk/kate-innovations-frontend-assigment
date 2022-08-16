import "./Background.scss";

export const Background = (): JSX.Element => {
    return (
        <div className="background">
            {Array.apply(null, { length: 20 }).map((e, i) => (
                <span key={i}></span>
            ))}
        </div>
    )
}
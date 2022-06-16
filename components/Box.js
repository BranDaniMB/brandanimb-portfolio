function Box({children, title, addClass}) {
    return (
        <div className={'box box-accent-one ' + addClass }>
            <h1 className="subtitle">{title}</h1>
            {children}
        </div>
    );
}

export default Box;
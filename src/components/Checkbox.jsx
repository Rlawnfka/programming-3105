export default function Checkbox(props) {
    const { children, id, ...rest} = props;
    return(
        <>
            <input type="checkbox" id={`chk-${id}`} className='todo__check' {...rest}/> {/* rest는 onChange */}
            <label htmlFor={`chk-${id}`} className='todo__label'>{children}</label>
        </>
    )
}
export const Circles = () => {
    return (
        <div style={{ position: 'absolute', left: 0, top: 0 }}>

            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <span
                    className="pulso"
                    style={{
                        position: 'absolute',
                        width: '15rem',
                        height: '15rem',
                        borderRadius: '50rem',
                        border: '1px solid #fafafa24',
                    }} />
                <span
                    className="pulso-reverse"
                    style={{
                        position: 'absolute',
                        width: '30rem',
                        height: '30rem',
                        borderRadius: '50rem',
                        border: '1px solid #fafafa24',
                    }} />


            </div>
        </div>
    )
}
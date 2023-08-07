import '.././App.css'

type UpdateStateType = () => void;

interface RoundProps {
    updateState: UpdateStateType;
}

export function Start({ updateState }: RoundProps) {    
    return (
    <>
        <span className='title'>Sueño y Consciencia</span>
        <p>
            ¡Hola! Al completar este formulario estarías participando de un proyecto de investigación científica conducido por el <a href='https://www.labsuenoymemoria.com/'><b>Laboratorio de Sueño y Memoria</b></a> del <a href='https://www.itba.edu.ar/'><b>Instituto Tecnológico de Buenos Aires (ITBA)</b></a>. Completar este formulario puede llevarte entre 15 y 20 minutos.<br/>
        </p>
        <p>
            En este estudio buscamos comprender distintos estados de consciencia que ocurren durante el sueño. Nos vamos a centrar en tres tipos de experiencias distintas:
        </p>
        <ul>
            <li>
                <b>Sueños Lúcidos:</b> Sueños en los que tenemos consciencia de estar soñando. Es decir, cuando sabemos que estamos soñando mientras el sueño transcurre. 
            </li>
            <li>
                <b>Parálisis de Sueño:</b> Ocurren cuando nos despertamos y no podemos hablar ni movernos voluntariamente. En algunos casos, las personas pueden tener alucinaciones visuales, auditivas y/o táctiles.
            </li>
            <li>
                <b>Experiencias Fuera del Cuerpo:</b> Refieren a la sensación de estar por fuera de nuestro cuerpo y percibir el mundo desde una perspectiva externa. Pueden ocurrir durante el sueño y durante la vigilia. 
            </li>
        </ul>
        <p>
            Cualquier duda o consulta que tengas podés escribirnos:
        </p>
        <ul>
            <li>
                <b>Dra. Cecilia Forcato:</b> cforcato@itba.edu.ar
            </li>
            <li>
                <b>Lic. Nerea Herrero:</b> neherrero@itba.edu.ar
            </li>
        </ul>
        <p>
            ¡Muchas gracias por tu participación!
        </p>
        <div className='button-wrapper mt-3'>
            <button className='btn btn-primary' onClick={updateState}>Siguiente</button>
        </div>
    </>
    );
}

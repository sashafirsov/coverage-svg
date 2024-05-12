// ifElse.js

export function ifElse( param )
{

    if( param )
        console.log( param )
    else
        console.log( 'param is missed' )

    return ( param ? `param is: ${ param === 1 ? 'one' : toString(param) }` : "param is missing" )
}

function toString( p, r )
{
    if( p > 10 )
    {
        return notTested( p )
    }
    return p;
}

function notTested(p)
{
    const a = p*10, b = p*20;
    console.log(p,a,b)
    return p;
}
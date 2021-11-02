import React from 'react'
import NextAuth from 'next-auth/client'

const SignIn = ({ providers }) => {
    const { signIn } = NextAuth
    return(
        <div>
            <h1>Custom Sigin test</h1>
            {
                providers && Object.values(providers).map(provider => 
                    <button key={provider.id} variant={'outline'} onClick={() => signIn(provider.id)}>
                        Sign In with {provider.name}
                    </button>
                )
            }
        </div>
    )
}

SignIn.getInitialProps = async(context) => {
    const {providers, getSession} = NextAuth
    const {req,res} = context
    
    const session = await getSession({req})
    if(session && res && session.accessToken) {
        res.writeHead(302, {
            Location: '/',
        })
        res.end()
        return
    }
    return {
        session: undefined,
        providers: await providers(context),
    }
}

export default SignIn
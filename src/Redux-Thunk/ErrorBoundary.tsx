import { Component,type ErrorInfo,type ReactNode } from "react";

interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends Component<Props,State>{
    constructor(props:Props){
        super(props)

        this.state ={
            hasError:false
        }
    }
    static getDerivedStateFromError(){
        return {
            hasError: true
        }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log('Caught an error',error)
        console.log('Component details ',errorInfo)
    }

    render(){
        if(this.state.hasError){
            return (
                <div>
                    <h2>Oops! something went wrong.</h2>
                    <p>We could not display the section</p>
                </div>
            )
        }
        return this.props.children
    }
}


export default ErrorBoundary;
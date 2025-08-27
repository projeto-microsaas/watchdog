import React from 'react';

     class ErrorBoundary extends React.Component {
       state = { hasError: false, error: null };

       static getDerivedStateFromError(error) {
         return { hasError: true, error };
       }

       render() {
         if (this.state.hasError) {
           return (
             <div>
               <h1>Algo deu errado.</h1>
               <p>{this.state.error?.message}</p>
             </div>
           );
         }
         return this.props.children;
       }
     }

     export default ErrorBoundary;
function greet(greeting: string = 'Hola'): string {
    return greeting.toUpperCase(); 
}

const defaultGreeting = greet();
const portugueseGreeting = greet('Oi como vai!');

export {defaultGreeting, portugueseGreeting};
export class LoggingService{
    // A service is just a normal typescript class so no need to add a decorator
    
    logStatusChange(status: string){
        console.log('A server status changed, new status: ' + status);

    }
}
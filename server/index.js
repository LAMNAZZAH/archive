const prisma = require('./instance'); 
const App = require('./app'); 


const PORT = process.env.PORT || 8080; 

const  testDbConnect = async () => {
    try {
        await prisma.$connect();
        return ture
    } catch (error) {
        console.log(`[DB-ERROR] Unable to establish a database connection`);
        console.log(`[DB-ERROR] ${error}`);
    }
}

const startApp = async () => {
    const connected = await testDbConnect(); 

    if (!connected) return; 

    App().listen(PORT, () => console.log(`🚀  http://localhost:${PORT}`));
}

startApp(PORT);
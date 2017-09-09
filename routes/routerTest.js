const router = express.Router(); //get an instance of router
router.get('/', (req, res) => {
    res.send('Welcome to our application');  
});

// about page route (http://localhost:8080/about)
router.get('/about', (req, res) => {
    res.send('Welcome to my about page!'); 
});
// apply the routes to our application
app.use('/', router);
import Dashboard from "../components/layout/Dashboard";



export const adminPaths =[
 {
    name:'Dashboard',
    path:'dashboard',
    element:<Dashboard/>
 } ,
 {
    name:'Admin Management',
    children:[
        {
            name:'Create.A Seamster',
            path:'create-academic-semester',
            element:<div>Admin</div>
        },

        ]
},  
{
    name:'User Management',
    children:[
        {
            name:'Create Product',
            path:'create-product',
            element:<div>User management</div>
        }
    ]
}
]
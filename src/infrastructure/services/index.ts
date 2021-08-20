import constraint from '@/constraints/environment' 
import server from './server'
const API=server(constraint.server.publicKey,constraint.server.url)

export default {API};





import express from 'express';
import { getOrders, getOrderById, getOrderSummary, deleteOrderById } from '../data/Data.js';

const router = express.Router();

router.get('/', async (request, response) => {
    response.json(await getOrders());
});

router.get('/summary', async (request, response) => {
    response.json(await getOrderSummary());
});

router.get('/:id', async (request, response) => {
    response.json(await getOrderById(request.params.id));
});

// Delete an order from the database based on its id and return a 200 on success or 404 if the order doesn't exist
router.delete('/:id', async (request, response) => {
    if (await deleteOrderById(request.params.id)) {
        response.status(200).send();
    } else {
        response.status(404).send();
    }
});


export default router;
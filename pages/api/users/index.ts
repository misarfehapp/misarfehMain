import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    // CREATE - POST request
    case 'POST':
      try {
        const { name, email, password, role } = req.body;
        const user = await prisma.user.create({
          data: {
            name,
            email,
            password, // In real app, hash the password before storing
            role,
          },
        });
        res.status(201).json(user);
      } catch (error) {
        res.status(400).json({ error: 'Failed to create user' });
      }
      break;

    // READ - GET request
    case 'GET':
      try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
      }
      break;

    // UPDATE - PUT request
    case 'PUT':
      try {
        const { id, name, email, password, role } = req.body;
        const updatedUser = await prisma.user.update({
          where: { id: Number(id) },
          data: {
            name,
            email,
            password, // In real app, hash the password before storing
            role,
          },
        });
        res.status(200).json(updatedUser);
      } catch (error) {
        res.status(400).json({ error: 'Failed to update user' });
      }
      break;

    // DELETE - DELETE request
    case 'DELETE':
      try {
        const { id } = req.body;
        await prisma.user.delete({
          where: { id: Number(id) },
        });
        res.status(204).json({ message: 'User deleted successfully' });
      } catch (error) {
        res.status(400).json({ error: 'Failed to delete user' });
      }
      break;

    default:
      res.setHeader('Allow', ['POST', 'GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

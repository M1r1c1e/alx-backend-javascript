import ClassRoom from './0-classroom';

/**
 * Implement a function named initializeRooms
 * @returns An array of 3 classroom
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}

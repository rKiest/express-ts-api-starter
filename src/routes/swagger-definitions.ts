// https://swagger.io/specification/#headerObject

/**
 * @swagger
 * definitions:
 *   Error:
 *     type: object
 *     required:
 *      - code
 *      - field
 *      - message
 *     properties:
 *       code:
 *         type: number
 *       field:
 *         type: string
 *         description: Input form field name or process name
 *       message:
 *         type: string
 */

/**
 * @swagger
 * definitions:
 *   ErrorsResponse:
 *     type: object
 *     properties:
 *       errors:
 *         type: array
 *         items:
 *           $ref: '#/definitions/Error'
 */

// -- request

/**
 * @swagger
 * definitions:
 *   Greeting:
 *     type: object
 *     required:
 *      - title
 *      - desc
 *     properties:
 *       id:
 *          type: string
 *          description: ID
 *       title:
 *         type: string
 *         description: Title
 *       desc:
 *         type: string
 *         description: Desc
 */

// ...

// We need swagger-definitions.js file .... !
export const SwaggerDefinitions = true;

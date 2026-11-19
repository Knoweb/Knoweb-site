import type { Core } from '@strapi/strapi';

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    try {
      const publicRole = await strapi
        .query('plugin::users-permissions.role')
        .findOne({ where: { type: 'public' } });

      if (publicRole) {
        const requiredActions = [
          'api::lead.lead.create',
          'api::blog.blog.find',
          'api::blog.blog.findOne',
          'api::category.category.find',
          'api::category.category.findOne',
          'api::author.author.find',
          'api::author.author.findOne',
        ];

        for (const action of requiredActions) {
          const exists = await strapi
            .query('plugin::users-permissions.permission')
            .findOne({
              where: {
                action,
                role: publicRole.id,
              },
            });

          if (!exists) {
            await strapi
              .query('plugin::users-permissions.permission')
              .create({
                data: {
                  action,
                  role: publicRole.id,
                },
              });
            strapi.log.info(`[Auto-Permission] Granted ${action} to Public role`);
          }
        }
      }
    } catch (err) {
      strapi.log.warn('[Auto-Permission Warning]: Could not auto-assign permissions on boot', err);
    }
  },
};

import Joi from 'joi';
import { DefaultValidatorInterceptor } from 'core/infrastructure/interceptor';
import { JoiUtils } from '../../../utils';

export const CreateDemoInterceptor = new DefaultValidatorInterceptor(
    Joi.object({
        name: JoiUtils.requiredString().min(1),
    })
);

import { ApiDocument } from "core/config/swagger.config";
import { SwaggerDocument } from "packages/swagger";

ApiDocument.addModel('CreateTestDto', {
    name: SwaggerDocument.ApiProperty({ type: 'string' }),
});

export const CreateTestDto = body => ({
    name: body.name,
})
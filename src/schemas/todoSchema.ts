import { toTypedSchema } from "@vee-validate/zod";
import zod from "zod";

const todoSchema = zod.object({
  title: zod.string().min(1, { message: "El campo todo name es requerido" }),
});

export default toTypedSchema(todoSchema);

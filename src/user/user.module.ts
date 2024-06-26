import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";

    @Module({
        imports: [],
        controllers: [UserController],
        providers: [], //Classes que vão prove um serviço que tem o injetable
        exports: []
    })
export class UserModule {}
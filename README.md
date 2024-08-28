# About

A simple nestjs + mongoose project to reproduce the issue with hook

# Steps to reproduce

it needs a mongodb instance running

1. replace .env.example with .env and put your mongodb connection string
2. run `npm install`
3. run `npm run start:dev`

launch the creation of a "test" document:

```shell
curl -X POST http://localhost:3000/test
```

You will see the hook is called two times instead of one. And the second time, the instance is ont a document anymore, therefore this.model does not exist.
To correct the issue, follow the instruction in the comment inside *test/hook.ts* file.

# About hook declaration inside module

NestJS documentation advise to declare hooks inside MongooseModule.forFeatureAsync, like this:
```typescript
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: History.name, schema: HistorySchema },
    ]),
    MongooseModule.forFeatureAsync([{
      name: Test.name,
      useFactory: () => {
        const schema = TestSchema;
        schema.pre("save", preSaveHook);
        return schema;
      }])
  ],
  controllers: [TestController],
  providers: [TestService]
})
```

With this way of adding hooks, neither exemple works.
The hook will be called twice either we imported History or we used string 
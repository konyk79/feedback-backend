import { Test, TestingModule } from '@nestjs/testing';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import mockedAnswerRedJasmin from '../mocked_answer_Red_Jasmine.json';
import mockedQuery from '../mocked_query.json';
import mockedTooManyResults from '../mocked_too_many_results.json';

describe('MessagesController', () => {
  let appController: MessagesController;
  let appService: MessagesService;
  const mockMessagesService = {
    getMovies: jest.fn().mockImplementation(async (query) => {
      if (query.title === 'Red Jasmine') return mockedAnswerRedJasmin;
      if (query.title === 's') return mockedTooManyResults;
      return { st: 'ok' };
    }),
  };
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MessagesController],
      providers: [{ provide: MessagesService, useValue: mockMessagesService }],
    })
      .overrideProvider(MessagesService)
      .useValue(mockMessagesService)
      .compile();
    appController = app.get<MessagesController>(MessagesController);
    appService = app.get<MessagesService>(MessagesService);
  });
  it('appService.getMovies should be run with proper query', () => {
    appController.getMovies(mockedQuery).then((data) => {
      expect(appService.getMovies).toBeCalledWith(mockedQuery);
    });
  });
  it('should return RedJasmine result ', () => {
    appController.getMovies(mockedQuery).then((data) => {
      expect(data).toEqual(mockedAnswerRedJasmin);
    });
  });
  it('should return Too Many Results ', () => {
    appController.getMovies({ ...mockedQuery, title: 's' }).then((data) => {
      expect(data).toEqual(mockedTooManyResults);
    });
  });
});

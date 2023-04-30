import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComponent } from './listar.component';
import { HttpClientModule } from '@angular/common/http';

import { faker } from '@faker-js/faker';
import { Planta } from 'src/app/modelos/planta';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ListarComponent', () => {
  let component: ListarComponent;
  let fixture: ComponentFixture<ListarComponent>;
  let debug: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list plants', () => {
    //Arrange
    let listPlants: Planta[] = new Array();
    let expectedSize = 4;
    Array.from({ length: 3 }).forEach(() => {
      listPlants.push(createRandomPlant());
    });
    //Act
    component.plantas = listPlants;
    fixture.detectChanges();
    //Assert
    expect(debug.queryAll(By.css('tr'))).toHaveSize(expectedSize);
  });
});

export function createRandomPlant(): Planta {
  return {
    id: 1,
    nombre_comun: faker.internet.userName(),
    nombre_cientifico: faker.internet.userName(),
    tipo: faker.internet.userName(),
    altura_maxima: 120,
    clima: faker.animal.bird.name,
    sustrato_siembra: faker.address.country.name
  };
}


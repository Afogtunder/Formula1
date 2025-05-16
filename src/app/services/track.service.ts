import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query, where, orderBy, limit } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  constructor(private firestore: Firestore) {}

  getAllTracks(): Observable<Track[]> {
    const tracksCollection = collection(this.firestore, 'Tracks');
    return new Observable<Track[]>((observer) => {
      getDocs(tracksCollection)
        .then((querySnapshot) => {
          const tracks: Track[] = [];
          querySnapshot.forEach((doc) => {
            tracks.push(doc.data() as Track);
          });
          observer.next(tracks);
          observer.complete();
        })
        .catch((err) => observer.error(err));
    });
  }

  getTracksByLength(minLength: number): Observable<Track[]> {
    const tracksRef = collection(this.firestore, 'Tracks');
    const q = query(
      tracksRef,
      where('length', '>=', minLength),
      orderBy('length'),
      limit(10)
    );
    return new Observable<Track[]>((observer) => {
      getDocs(q)
        .then((querySnapshot) => {
          const tracks: Track[] = [];
          querySnapshot.forEach((doc) => {
            tracks.push(doc.data() as Track);
          });
          observer.next(tracks);
          observer.complete();
        })
        .catch((error) => observer.error(error));
    });
  }

  getTracksByEstablishedYear(minYear: number): Observable<Track[]> {
    const tracksRef = collection(this.firestore, 'Tracks');
    const q = query(
      tracksRef,
      where('established', '>=', minYear),
      orderBy('established'),
      limit(10)
    );
    return new Observable<Track[]>((observer) => {
      getDocs(q)
        .then((querySnapshot) => {
          const tracks: Track[] = [];
          querySnapshot.forEach((doc) => {
            tracks.push(doc.data() as Track);
          });
          observer.next(tracks);
          observer.complete();
        })
        .catch((error) => observer.error(error));
    });
  }

  getTracksByEstablishedYearAndCountry(minYear: number, country: string): Observable<Track[]> {
  const tracksRef = collection(this.firestore, 'Tracks');
  const q = query(
    tracksRef,
    where('established', '>=', minYear),
    where('country', '==', country),
    orderBy('established'),
    orderBy('country'),
    limit(10)
  );
  return new Observable<Track[]>((observer) => {
    getDocs(q)
      .then((querySnapshot) => {
        const tracks: Track[] = [];
        querySnapshot.forEach((doc) => {
          tracks.push(doc.data() as Track);
        });
        observer.next(tracks);
        observer.complete();
      })
      .catch((error) => observer.error(error));
  });
}
getTracksOrderedByLengthAscending(): Observable<Track[]> {
  const tracksRef = collection(this.firestore, 'Tracks');
  const q = query(
    tracksRef,
    orderBy('length', 'asc')  // Növekvő sorrendben rendezés
  );
  return new Observable<Track[]>((observer) => {
    getDocs(q)
      .then((querySnapshot) => {
        const tracks: Track[] = [];
        querySnapshot.forEach((doc) => {
          tracks.push(doc.data() as Track);
        });
        observer.next(tracks);
        observer.complete();
      })
      .catch((error) => observer.error(error));
  });
}
getFirstFiveTracksByEstablishedYear(): Observable<Track[]> {
  const tracksRef = collection(this.firestore, 'Tracks');
  const q = query(
    tracksRef,
    orderBy('established', 'asc'),  // Növekvő sorrendben rendezés az alapítás éve alapján
    limit(5)  // Csak az első 5 pálya
  );
  return new Observable<Track[]>((observer) => {
    getDocs(q)
      .then((querySnapshot) => {
        const tracks: Track[] = [];
        querySnapshot.forEach((doc) => {
          tracks.push(doc.data() as Track);
        });
        observer.next(tracks);
        observer.complete();
      })
      .catch((error) => observer.error(error));
  });
}

}

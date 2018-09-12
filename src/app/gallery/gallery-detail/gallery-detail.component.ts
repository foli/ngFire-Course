import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css']
})
export class GalleryDetailComponent implements OnInit {
  image: any;

  constructor(private router: ActivatedRoute, private galleryService: GalleryService) {}

  ngOnInit() {
    this.getImage();
  }
  getImage() {
    const id = this.router.snapshot.paramMap.get('id');
    this.galleryService.getImage(id).subscribe(image => (this.image = image));
  }

  delete() {
    const id = this.router.snapshot.paramMap.get('id');
    const name = this.image.name;
    this.galleryService.deleteImage(id, name);
  }
}
